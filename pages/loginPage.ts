import { Locator, Page } from "playwright";
import { expect } from "playwright/test";


class LoginPage{

    private page:Page;

    public logintxt:Locator;
    public loginEmail:Locator;
    public loginPassword:Locator;
    public loginbtn:Locator;
    public dashboardText:Locator;

    constructor(page:Page){
        this.page = page; 
        this.logintxt = page.locator('//div/span[text()="Sign in"]');
        this.loginEmail = page.getByPlaceholder("Email address");
        this.loginPassword = page.getByPlaceholder("Password");
        this.loginbtn = page.locator('//button[@type="submit"]');
        this.dashboardText = page.locator('//div/span[text()="Dashboard"]');
    }

    async login(email:string, password:string){
        await this.logintxt.isVisible();
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginbtn.click();

    }

}
export default LoginPage;