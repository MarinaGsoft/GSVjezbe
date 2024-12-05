import React, { FC, useState } from "react";

export const Register: FC = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />

        <label htmlFor="confirmPassword">Password</label>
        <input type="text" id="confirmPassword" name="confirmPassword" />
      </form>
    </div>
  );
};
