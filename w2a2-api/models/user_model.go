package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
    Id       primitive.ObjectID `json:"id,omitempty"`
    Username     string             `json:"username,omitempty" validate:"required"`
    Partnername     string             `json:"partnername,omitempty" validate:"required"`
    Email     string             `json:"email,omitempty" validate:"required"`
    Password     string             `json:"password,omitempty" validate:"required"`
    // Location string             `json:"location,omitempty" validate:"required"`
    // Title    string             `json:"title,omitempty" validate:"required"`
}