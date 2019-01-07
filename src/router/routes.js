import KbnBoardView from '@/components/templates/KbnBoardView'
import KbnLoginView from '@/components/templates/KbnLoginView'
import KbnTaskDetailModel from '@/components/templates/KbnTaskDetailModel'

export default [{
    path: '/',
    components: KbnBoardView,
    meta: {requiresAuth: true}
}, {
    path: '/login',
    components: KbnLoginView
}, {
    path: '/tasks/:id',
    components: KbnTaskDetailModel,
    meta: {requiresAuth: true}
}, {
    path: '*',
    redirect: '/'
}]