import { Injectable } from "@angular/core";

@Injectable()

export class Constants {
    public readonly api_Endpoints: string = 'http://localhost:5000/';

    public readonly mock_Endpoints: string = 'https://localhost:5000/';

    public static title_of_application: string = 'FreshFarm';
}