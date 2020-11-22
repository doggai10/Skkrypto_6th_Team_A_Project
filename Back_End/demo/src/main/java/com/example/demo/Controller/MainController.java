package com.example.demo.Controller;


import com.example.demo.account.AccountRepository;
import com.example.demo.account.AccountService;
import com.example.demo.account.SignCheck;
import com.example.demo.domain.Account;
import com.example.demo.settings.form.SignInForm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.h2.util.json.JSONObject;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
public class MainController {


    private final AccountService accountService;
    private final AccountRepository accountRepository;

    @GetMapping("/login")
    public void loginForm(Model model, SignCheck signCheck , Account account) {
        model.addAttribute( new SignInForm());
    }

    @PostMapping("/login")
    public SignCheck loginFormSubmit(Model model,@Valid @RequestBody SignInForm signInForm) {
        Account account = accountRepository.findByEmail(signInForm.getEmail());
        SignCheck signCheck=new SignCheck();
        if (account == null || !account.getPassword().equals(signInForm.getPassword()) ) {
            System.out.println("false");
            signCheck.setName("null");
            signCheck.setStatus("false");
        }else{
            accountService.login(account);
            signCheck.setName(account.getEmail());
            signCheck.setStatus("true");
        }
        return  signCheck;
    }
}
