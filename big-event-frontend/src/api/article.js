import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token';

//文章分类
//文章分类列表查询
export const articleCategoryListService = ()=>{
  //const tokenStore = useTokenStore();
  //在pinia中定义的响应式数据，都不需要.value。
  //return request.get('/category',{headers:{'Authorization':tokenStore.token}});
  return request.get('/category');
}

//添加文章分类
export const articleCategoryAddService = (categoryModel)=>{
  
  return request.post('/category',categoryModel);
  
}

//文章分类修改
export const articleCategoryUpdateService = (categoryModel) => {
  return request.put('/category',categoryModel)
}

//删除文章分类
export const articleCategoryDeleteService = (id) => {
  return request.delete('/category?id='+id)
}


//文章
//文章列表查询
export const articleListService = (params) =>{
  return request.get('/article', { params : params })
}

//文章添加
export const articleAddService = (articleModel) => {
  return request.post('/article',articleModel);
}

//文章修改
export const articleUpdateService = (articleModel) => {
  return request.put('/article',articleModel);
}

//文章删除
export const articleDeleteService = (id) =>{
  return request.delete('/article?id='+id);
}