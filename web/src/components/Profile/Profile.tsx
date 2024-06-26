import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import useToggle from "../../hooks/useToggle";
import Footer from "../Footer";
import Header from "../Header";
import Button from "../ui/Button";
import ErrorText from "../ui/ErrorText";
import InputField from "../ui/InputField";
import Page from "../ui/Page";
import styles from "./Profile.module.css";

interface FormUser {
  email: string;
}

const Profile = () => {
  const { user, auth } = useAuth();
  const emailModal = useToggle();
  const passworModal = useToggle();
  const deleteModal = useToggle();
  const [error, setError] = useState(false);

  const closeAllModal = () => {
    emailModal.close();
    passworModal.close();
    deleteModal.close();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormUser>();

  return (
    <>
      <Header />
      <Page title="Profile">
        {error && <ErrorText text="An unknown error has occurred." />}
        <Item
          label="E-Mail Address"
          value={user?.email ?? ""}
          openValue="Enter your new E-Mail Address"
          modal={emailModal}
          closeAllModal={closeAllModal}
        >
          <form>
            <InputField
              type="email"
              placeholder="E-Mail"
              register={{
                ...register("email", {
                  required: "Please insert an E-Mail Address",
                }),
              }}
              error={errors.email}
            />
            <Button
              type="submit"
              isLoading={isSubmitting}
              onClick={handleSubmit(async (body) => {
                setError(false);
                const { error } = await auth.updateUser({
                  email: body.email,
                });

                error ? setError(true) : passworModal.close();
              })}
            >
              Save
            </Button>
          </form>
        </Item>
        <Item
          label="Password"
          value="**********"
          openValue="You need to get a Password Reset Email?"
          editBtnLabel="Change"
          modal={passworModal}
          closeAllModal={closeAllModal}
        >
          <Button
            onClick={async () => {
              const email = user?.email;
              if (!email) return;

              const { error } = await auth.resetPasswordForEmail(email);
              error ? setError(true) : deleteModal.close();
            }}
          >
            Send
          </Button>
        </Item>
        <Item
          label="Delete Account"
          value="All your Data"
          openValue="Are you sure you want to delete your profile?"
          editBtnLabel="Delete"
          modal={deleteModal}
          closeAllModal={closeAllModal}
        >
          <Button
            onClick={async () => {
              const id = user?.id;
              if (!id) return;

              const { error } = await auth.admin.deleteUser(id);
              error ? setError(true) : deleteModal.close();
            }}
          >
            Delete Permanently
          </Button>
        </Item>
      </Page>
      <Footer />
    </>
  );
};

type ItemProps = PropsWithChildren<{
  label: string;
  value: string;
  openValue: string;
  modal: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    toggle: () => void;
  };
  editBtnLabel?: string;
  closeAllModal: () => void;
}>;

const Item = ({
  label,
  value,
  openValue,
  modal,
  editBtnLabel = "Edit",
  closeAllModal,
  children,
}: ItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.labelRow}>
        <p className={styles.label}>{label}</p>
        {!modal.isOpen ? (
          <button
            className={styles.btn}
            onClick={() => (closeAllModal(), modal.open())}
          >
            {editBtnLabel}
          </button>
        ) : (
          <button className={styles.btn} onClick={modal.close}>
            Cancel
          </button>
        )}
      </div>
      <div>
        {!modal.isOpen ? (
          <p className={styles.value}>{value}</p>
        ) : (
          <>
            <p className={styles.value}>{openValue}</p>
            <div className={styles.modalWrapper}>{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
