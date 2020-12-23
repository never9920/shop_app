import { request } from "./request";

export function getcatedata() {
    return request({
        url: '/category'
    })
}

export function getsubcategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getcategorydetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}