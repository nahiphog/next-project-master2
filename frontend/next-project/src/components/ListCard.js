import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    height: "20vh",
    width: "98vw"
  },
  cover: {
    width: 151
  }
}));

export default function ListCard() {
  const classes = useStyles();
  const value = 2;

  return (
    <div style={{ display: "flex", justifyContent:"center"}}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://desmond-nextagram.s3.ap-southeast-1.amazonaws.com/cat4.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLWVhc3QtMSJIMEYCIQDLrXGtsRtTm2dwkMJt2aqo1LXhJ2IXb2My%2BEfDDI402AIhAMSE6O478t6QvJE9bvq%2B0Kl08ZECf9ASYDBR09yPTYG6Ko0CCG0QABoMNzU3NTk3NjY4MzQzIgyljzkgd5KbTcUlJDwq6gHWBL8AmRqw6uzzIvm6F5IsrMI0TujnVXAmCQRrihaheGoB2FBE%2BAK7ECI8avEJV2Qm6S9p5aKDhceFqocCnyUIBdDzW7XP5pa8wcg9eQTwKqvvvmmnvcD2CMzMrIboPYgaUKXEeAqBy99bjdG%2Bvcj7asigAAvKdfkUoy%2FqpNP4CK1j1HuBWeLKO0%2F4p7OtuUG77mWYQxYdx2YKABWWMXKLZ1xtgHC12xlnVgCGscVrtmmvSMmdZZuaHVLOk499C53IWMcGVUKHU8x0nqr%2FK3skBO91u31420fiXO6ygVb10SEBfdlZR0bFyoIw2L3y7gU6gQOtETaroN8rsBy4fg31kD4%2BVCbvLcftldnVK%2BuDgrnYs0rJZN5cxJV5ma67TH36d01hC5me2NUtRT6V1WJG4b9cnGFAhUmz%2F3DUqfVATkTOka9HQndSgtH1pJLBBWk0%2BfviOMgfqA5bjSSy6yjYw45%2FHBVs6JcpEusqBfDklN6VxGreT3iS5MtEjlH6PmoJPIg%2F9CRSglErUKmiDzd%2FCNDXg5kmEagTYE6AViAN5F0vYduMf8PTOaF%2BRoI7xblw8bawmtfPSI4ztaOaUeR4%2BHuV1Vniz1nWJ98YaH0qh4DnFytVFfRYWwwHhrrkvKW9diYrfJWiaOa9E2tJtvghkB%2F893pYPrkVGIXKuxuYozrsmfI6lISJkKrVOqkEW2%2BGKLEakCazWuGJk8yxapeyo6j0jUevrd5cRJVrtTt5zieosAxo1fnEYZPcNzePAvixrbZily%2FsZXal0hybtUv1fXdaEKhJUkig4RcmM0etG%2BvZh5Vap9l8PLQUoOt37XZx%2Bho0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191126T034143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3AZCXAP333FNHPHI%2F20191126%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4bf66ecdd294b69441116779e156c34af4eba78da59bf9411b484d80f5e27f46"
        title="Live from space album cover"
      />
      <div>
        <CardContent align="left">
          <Typography>Title: Some Lesson</Typography>
          <Typography>Aurthor: Someone</Typography>
          <Typography>Skill Categories: Computer Science</Typography>
          <Typography>Lesson Rating:</Typography>
          <Rating name="read-only" value={value} readOnly />
        </CardContent>
      </div>
    </Card>
    </div>
  );
}
