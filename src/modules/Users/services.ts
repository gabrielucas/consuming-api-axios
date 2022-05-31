import {IUser} from './types'
import api from '../../services/api'

export const getUsers = ():Promise<IUser[]> => api.get('/users').then(res => res.data);

