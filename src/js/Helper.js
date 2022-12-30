import React, { useState, useEffect } from "react";
import axios from "axios";

export function Login(userEmail, userPassword, array) {
  let result = false;
  // Confirm user
  // Loop through array
  for (let interviewee of array) {
    // Return true if a user exist witht the same password and email
    if (
      interviewee["email"] == userEmail &&
      interviewee["password"] == userPassword
    ) {
      result = true;
      return result;
    }
  }
  return result;
}
