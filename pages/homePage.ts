import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

class HomePage{
    public page:Page;
    public mynewWorkspace:Locator;


    constructor(page:Page){
        this.page = page; 
        this.mynewWorkspace=page.locator(".dls-txt-button.dls-text-text-selected");
    }

   

}
export default HomePage;