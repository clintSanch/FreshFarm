import { Injectable } from "@angular/core";

@Injectable()

export class Constants {
    public readonly api_Endpoints: string = 'http://localhost:4200/api';

    public readonly mock_Endpoints: string = 'https://localhost:4200/api';

    public static title_of_application: string = 'FreshFarm';
}