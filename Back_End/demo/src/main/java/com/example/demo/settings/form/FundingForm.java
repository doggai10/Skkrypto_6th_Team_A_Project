package com.example.demo.settings.form;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
public class FundingForm {

    @NotBlank
    private String name;

    @NotBlank
    private String wallet;

    @NotBlank
    private String sale;

    @NotBlank
    private String content;

    @NotBlank
    private String money;

    @NotBlank
    private String quantity;

    //@NotBlank
    private String localDateTime;



}
