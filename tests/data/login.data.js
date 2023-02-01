import * as generator from '@tests/helpers/generator'

export const VALID_LOGIN = {
    username: 'standard_user',
    password: 'secret_sauce'
}

export const INVALID_LOGIN = {
    username: generator.username(),
    password: generator.password()
}