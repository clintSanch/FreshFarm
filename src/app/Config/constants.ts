import { Injectable } from "@angular/core";

@Injectable()

export class Constants{
    public readonly api_Endpoints: string = 'https://www.userdomain.com/';

    public readonly mock_Endpoints: string = 'https://www.userdomainmock.com/';

    public static title_of_application: string = 'FreshFarm';
}