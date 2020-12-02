package com.example.demo.settings.validator;


import com.example.demo.settings.form.SignInForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
@RequiredArgsConstructor
public class SignInFormValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.isAssignableFrom(SignInForm.class);
    }

    @Override
    public void validate(Object o, Errors errors) {

    }
}
