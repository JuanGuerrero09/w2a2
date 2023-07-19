package models

import (
	"time"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Draw struct {
	ID         primitive.ObjectID `bson:"_id,omitempty"`
	Img        string            `bson:"img,omitempty"`
	Author     primitive.ObjectID `bson:"author,omitempty"`
	SharedWith primitive.ObjectID `bson:"sharedWith,omitempty"`
	CreatedAt  time.Time         `bson:"createdAt,omitempty"`
	UpdatedAt  time.Time         `bson:"updatedAt,omitempty"`
}

type Author struct {
	id string
}