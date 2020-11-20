package com.example.demo.settings.form;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class SignInForm {

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;

}
