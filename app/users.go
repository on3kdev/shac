package app

import (
	"fmt"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
	"github.com/google/uuid"
	"github.com/on3k/shac-api/common"
	"github.com/on3k/shac-api/common/httperr"
	"github.com/on3k/shac-api/domain"
	"github.com/on3k/shac-api/repositories"
)

type User struct {
	Id  uuid.UUID `json:"id"`
	Username   string      `json:"username"`
	Password string    `json:"password"`
	CreatedAt time.Time `json:"created_at"`
	PlatformId uuid.UUID    `json:"platform_id"`
	CreatorId uuid.UUID    `json:"creator_id"`
}

func (app Application) GetUsers(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	pagination, err := common.NewPaginationFromURL(r.URL.Query())
	if err != nil {
		render.Render(w, r, httperr.ErrBadRequest(err.Error()))
		return
	}

	users, err := app.Repositories.User.GetAllUsers(ctx, pagination)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	count, _ := app.Repositories.User.GetUsersCount(ctx, pagination)

	type Response struct {
		Count int                 `json:"count"`
		Items     []*repositories.FullUser `json:"items"`
	}

	res := Response{Count: *count, Items: users}

	render.JSON(w, r, res)
}

func (app Application) GetUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	param := chi.URLParam(r, "userId")
	if param == "" {
		render.Render(w, r, httperr.ErrBadRequest("missing parameter 'userId'"))
		return
	}
	userId, err := uuid.Parse(param)
	if err != nil {
		render.Render(w, r, httperr.ErrBadRequest("invalid parameter userId"))
		return
	}
	exists, errExists := app.Repositories.User.ExistsUser(ctx, userId)
	if errExists != nil {
		render.Render(w, r, httperr.ErrInternalServer(errExists.Error()))
		return
	}
	if !exists {
		render.Render(w, r, httperr.ErrNotFound(fmt.Sprintf("user '%s' not found", userId)))
		return
	}

	res, err := app.Repositories.User.GetUser(ctx, userId)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	render.JSON(w, r, mapUser(*res))
}

func (app Application) GetUserVotes(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	param := chi.URLParam(r, "userId")
	if param == "" {
		render.Render(w, r, httperr.ErrBadRequest("missing parameter 'userId'"))
		return
	}
	userId, err := uuid.Parse(param)
	if err != nil {
		render.Render(w, r, httperr.ErrBadRequest("invalid parameter userId"))
		return
	}
	exists, errExists := app.Repositories.User.ExistsUser(ctx, userId)
	if errExists != nil {
		render.Render(w, r, httperr.ErrInternalServer(errExists.Error()))
		return
	}
	if !exists {
		render.Render(w, r, httperr.ErrNotFound(fmt.Sprintf("user '%s' not found", userId)))
		return
	}

	res, err := app.Repositories.User.GetUserVotes(ctx, userId)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	render.JSON(w, r, res)
}

func (app Application) CreateUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	
	var body domain.UserBody
	if err := render.Bind(r, &body); err != nil {
		render.Render(w, r, httperr.ErrBadRequest(err.Error()))
		return
	}

	user := repositories.User{
		Username: body.Username,
		Password: body.Password,
		PlatformId: body.PlatformId,
		CreatorId: body.CreatorId,
	}

	res, err := app.Repositories.User.CreateUser(ctx, &user)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	render.JSON(w, r, res)
}

func (app Application) UpdateUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	param := chi.URLParam(r, "userId")
	if param == "" {
		render.Render(w, r, httperr.ErrBadRequest("missing parameter 'userId'"))
		return
	}
	userId, err := uuid.Parse(param)
	if err != nil {
		render.Render(w, r, httperr.ErrBadRequest("invalid parameter userId"))
		return
	}
	
	var body domain.UserIdBody
	if err := render.Bind(r, &body); err != nil {
		render.Render(w, r, httperr.ErrBadRequest(err.Error()))
		return
	}

	user := repositories.User{
		Id: userId,
		Username: body.Username,
		Password: body.Password,
		PlatformId: body.PlatformId,
	}

	exists, errExists := app.Repositories.User.ExistsUser(ctx, userId)
	if errExists != nil {
		render.Render(w, r, httperr.ErrInternalServer(errExists.Error()))
		return
	}
	if !exists {
		render.Render(w, r, httperr.ErrNotFound(fmt.Sprintf("user '%s' not found", userId)))
		return
	}
	
	res, err := app.Repositories.User.UpdateUser(ctx, &user)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	render.JSON(w, r, res)
}

func (app Application) DeleteUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	param := chi.URLParam(r, "userId")
	if param == "" {
		render.Render(w, r, httperr.ErrBadRequest("missing parameter 'userId'"))
		return
	}
	userId, err := uuid.Parse(param)
	if err != nil {
		render.Render(w, r, httperr.ErrBadRequest("invalid parameter userId"))
		return
	}

	exists, errExists := app.Repositories.User.ExistsUser(ctx, userId)
	if errExists != nil {
		render.Render(w, r, httperr.ErrInternalServer(errExists.Error()))
		return
	}
	if !exists {
		render.Render(w, r, httperr.ErrNotFound(fmt.Sprintf("user '%s' not found", userId)))
		return
	}

	_, err = app.Repositories.User.DeleteUser(ctx, userId)
	if err != nil {
		render.Render(w, r, httperr.ErrInternalServer(err.Error()))
		return
	}

	render.NoContent(w, r)
}

func mapUser(dbItem repositories.User) User {
	return User{
		dbItem.Id,
		dbItem.Username,
		dbItem.Password,
		dbItem.CreatedAt,
		dbItem.PlatformId,
		dbItem.CreatorId,
	}
}
