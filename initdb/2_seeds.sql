INSERT INTO platforms (id, name, domain)VALUES 
('d6fbba90-4e07-4d2a-906c-9229610c95c4', 'Instagram', 'https://www.instagram.com'),
('a8f71f23-8e04-42e5-ab69-5baf7b78aea0', 'Facebook', 'https://www.facebook.com'),
('7389c780-86b1-42b7-a118-7f0830109464', 'Snapchat', 'https://www.snapchat.com'),
('4e1a32db-9e0b-492d-bc8c-232359292fd9', 'Google', 'https://www.google.com'),
('ea191b37-8878-40c8-9a21-01c7722be456', 'Tinder', 'https://www.tinder.com'),
('6056b64e-c72c-4e15-a422-99f4af4f564b', 'Evernote', 'https://www.evernote.com'),
('fc4d2d2f-31ae-4f99-b4d2-0c9322ebfdc5', 'Twitter', 'https://www.twitter.com'),
('16f32e1b-cb87-4922-b44c-b8b2ddede3fc', 'Dropbox', 'https://www.dropbox.com'),
('4e0852cc-7aba-4f32-b3be-c4e7c598ea84', 'Tiktok', 'https://www.tiktok.com'),
('a755e64e-4b0f-4592-9dc1-01947fc278fc', 'Onlyfans', 'https://www.onlyfans.com'),
('ee5f3f08-4c00-4f4e-8f9e-bc8d805edb76', 'Discord', 'https://www.discord.com'),
('29e0d5a5-172e-419e-8bf7-cfbf472105ff', 'Pinterest', 'https://www.pinterest.com'),
('697820ed-847b-4c78-9d28-e17a48e09ca7', 'Reddit', 'https://www.reddit.com'),
('1d4e03dd-ccd6-4732-8f61-8c0a4aad81ed', 'Stack Exchange', 'https://www.stackexchange.com'),
('cee7ecfb-48eb-4d9d-af2a-82b191c4b0c4', 'Stack Overflow', 'https://www.stackoverflow.com'),
('1e96484e-d3fd-4d7e-9cf5-4faf5a1f02e3', 'Twitch', 'https://www.twitch.tv');

INSERT INTO users (id, username, password, votes_up, votes_down, platform_id) VALUES 
('0b64e75d-1ff6-4396-9b70-531b4eee8e54', 'sam', 'JdnSk5d1D2', 50, 36, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('88511ad4-ac5d-4732-8901-d593865c2837', 'donald', 'MCt8KNkC+k', 10, 5, 'a8f71f23-8e04-42e5-ab69-5baf7b78aea0'),
('ee0b6875-aaaf-4f13-9676-e6417512d580', 'jamie', 'Nax&wm6ygB', 4, 25, '6056b64e-c72c-4e15-a422-99f4af4f564b'),
('5ab82089-370d-49cf-be25-341288a28be8', 'tester.t', 'c2Tj?uZygX', 5, 69, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('7f9fcae1-09cf-44f5-81d4-a7b862cb70e9', 'pamela.and', 'XjXJH?Ub2c', 12, 5, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('17f384ed-1ea9-45d5-9924-ff65f879c997', 'oooo', 'hrABqxA=H3', 81, 8, '6056b64e-c72c-4e15-a422-99f4af4f564b'),
('cea88e5e-42e3-497c-aa19-edb21c553bc1', 'smdkdfasd', 'Z!dpV8TvWJ', 9, 16, 'd6fbba90-4e07-4d2a-906c-9229610c95c4'),
('4f47c4bb-2e55-4988-acc4-6d3c2b905b0d', 'carrie', '74120', 50, 36, 'ea191b37-8878-40c8-9a21-01c7722be456'),
('b74f0d2c-8387-4dd5-9679-d006aae680e1', 'robert52', 'sdfg5dd+k', 18, 15, 'fc4d2d2f-31ae-4f99-b4d2-0c9322ebfdc5'),
('27513d20-31ca-4861-954e-981a790c0f91', 'eric', 'Nax&wm6ygB', 4, 25, '6056b64e-c72c-4e15-a422-99f4af4f564b'),
('a24ddd07-ae66-4f34-9fe2-ffad1583425a', 'maggie', 'c2Tj?uZygX', 5, 69, 'a8f71f23-8e04-42e5-ab69-5baf7b78aea0'),
('7f7f31f5-d6ed-4d67-95a5-28fa17e22860', 'kortnei85', 'XjXJH?Ub2c', 12, 5, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('e7ce6ee1-7ac2-4cfd-a832-4102748692b3', 'aston', 'hrABqxA=H3', 1, 14, '6056b64e-c72c-4e15-a422-99f4af4f564b'),
('20b24993-ab97-4c48-b9f6-499875a83e74', 'smiley', 'Z!dpV8TvWJ', 61, 1, 'd6fbba90-4e07-4d2a-906c-9229610c95c4'),
('27d3fea6-640e-49cb-abd0-ad3079ed958a', 'mike', 'JdnSk5d1D2', 86, 6, 'fc4d2d2f-31ae-4f99-b4d2-0c9322ebfdc5'),
('f19be2de-bb5c-46f7-a2b3-c5d57996b736', 'smithp.', 'MCt8KNkC+k', 10, 5, 'a8f71f23-8e04-42e5-ab69-5baf7b78aea0'),
('b23eb4bb-2bed-4496-998a-b4f8c592e51d', 'jaiden.s', 'Nax&wm6ygB', 82, 5, 'ea191b37-8878-40c8-9a21-01c7722be456'),
('5a6ac179-6438-448f-afba-1ff51f23877b', 'AdAm', 'c2Tj?uZygX', 72, 9, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('d2753b6e-8a18-4914-b616-57dde7e048f4', 'xoxo96', 'XjXJH?Ub2c', 12, 9, '4e1a32db-9e0b-492d-bc8c-232359292fd9'),
('3b4c07a4-8ecc-4dac-9b9e-1d92bb9b22d0', '6ix9ineReal', 'hrABqxA=H3', 83, 28, '6056b64e-c72c-4e15-a422-99f4af4f564b'),
('a663ef39-93b7-4315-81df-4d3605407aa3', 'felip', 'Z!dpV8TvWJ', 52, 18, 'ea191b37-8878-40c8-9a21-01c7722be456');