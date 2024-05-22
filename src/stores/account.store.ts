import { makeAutoObservable, runInAction } from "mobx";
import { UserReadDTO } from "../models/user-read-dto.model";
import { Login } from "../models/login.model";
import HttpService from "../network/http.service";
import { UserCreateDTO } from "../models/user-create-dto.model";

export default class AccountStore {
    private httpService: HttpService;
    
    user: UserReadDTO | null = null;


    constructor() {
        makeAutoObservable(this);
        this.httpService = new HttpService();
    }

    get isLoggedIn(): boolean {
        return !!this.user;
    }

    public login = async (creds: Login) => {
        try {
            const user = await this.httpService.loginUser(creds);
            runInAction(() => {
                this.user = user;
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error occured when login due to", errorCaptured.message);
            throw errorCaptured;
        }
    }

    public register = async (accountDetails: UserCreateDTO) => {
        try {
            const user = await this.httpService.registerLogin(accountDetails);
            runInAction(() => {
                this.user = user;
            });
        } catch (error) {
            const errorCaptured = error as Error;
            console.info("Error occured when register due to", errorCaptured.message);
            throw errorCaptured;
        }
    }
}