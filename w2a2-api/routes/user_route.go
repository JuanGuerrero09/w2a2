package routes

import (
    "w2a2-api/controllers" //add this
    "github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine)  {
    //All routes related to users comes here
    router.POST("/user", controllers.CreateUser()) //add this
    router.GET("/user/:userId", controllers.GetAUser()) //add this
    router.PUT("/user/:userId", controllers.EditAUser())
    router.GET("/users", controllers.GetAllUsers()) 
    router.DELETE("/user/:userId", controllers.DeleteAUser()) 
}