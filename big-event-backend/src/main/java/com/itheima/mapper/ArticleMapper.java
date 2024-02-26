package com.itheima.mapper;

import org.apache.ibatis.annotations.*;
import com.itheima.pojo.Article;

import java.util.List;

@Mapper
public interface ArticleMapper {

    //新增
    @Insert("insert into article(title,content,cover_img,state,category_id,create_user,create_time,update_time)"+
             " values(#{title},#{content},#{coverImg},#{state},#{categoryId},#{createUser},#{createTime},#{updateTime})")
    void add(Article article);

    //分页查询
    List<Article> list(Integer userId, Integer categoryId, String state);

    //查询文章
    @Select("select id,title,content,cover_img,state,category_id,create_time,update_time from article where id=#{id}")
    Article detail(Integer id);

    //更新分类
    @Update("update article set title=#{title},content=#{content},cover_img=#{coverImg},state=#{state},category_id=#{categoryId} where id=#{id}")
    void update(Article article);

    //根据id删除文章
    @Delete("delete from article where id=#{id}")
    void delete(Integer id);
}
