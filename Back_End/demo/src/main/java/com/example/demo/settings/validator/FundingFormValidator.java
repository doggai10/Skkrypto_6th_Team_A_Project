package com.example.demo.settings.validator;

import com.example.demo.settings.form.FundingForm;
import com.example.demo.funding.FundingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
@RequiredArgsConstructor
public class FundingFormValidator implements Validator {

    private final FundingRepository fundingRepository;

    @Override
    public boolean supports(Class<?> aClass) {

        return aClass.isAssignableFrom(FundingForm.class);
    }

    @Override
    public void validate(Object o, Errors errors) {

    }
}
