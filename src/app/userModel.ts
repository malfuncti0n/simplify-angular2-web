/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/

export class UserModel {
	constructor(
		public _id: string,
        public email: string,
        public username: string,
        public firstname: string,
		public lastname: string,
        public password: string,
		public gender: string,
		public country: string
	) {}
}
