import { commonEnvironment } from "./environment.common"

const stagingEnvironment: Partial<typeof commonEnvironment> = {
    production : true,
    environmentName: 'Staging'
}

export const environment = Object.assign(commonEnvironment, stagingEnvironment);