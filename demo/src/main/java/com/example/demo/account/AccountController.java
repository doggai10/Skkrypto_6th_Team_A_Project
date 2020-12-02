package com.example.demo.account;
import com.example.demo.domain.Account;
import com.example.demo.settings.form.SignInForm;
import com.example.demo.settings.form.SignUpForm;
import com.example.demo.settings.validator.SignInFormValidator;
import com.example.demo.settings.validator.SignUpFormValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequiredArgsConstructor
public class AccountController {


    private final SignUpFormValidator signUpFormValidator;
    private final AccountService accountService;
    private final SignInFormValidator signInFormValidator;

    @InitBinder("signUpForm")
    public void signUpBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(signUpFormValidator);
    }

    @InitBinder("signInForm")
    public void signInBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(signInFormValidator);
    }

    @GetMapping("/sign-up")
    public void signUpForm(HttpServletResponse response,Model model){
        model.addAttribute( new SignUpForm());
        System.out.println(model.toString());
    }

    @PostMapping("/sign-up")
    public Account signUpSubmit (@Valid @RequestBody SignUpForm signUpForm, Model model, Errors errors){
        if(errors.hasErrors()){
            model.addAttribute("error", "회원가입을 할 수 없습니다.");
            return  null;
        }
        Account account = accountService.processNewAccount(signUpForm);
        System.out.println("account id: "+account.getId());
        System.out.println("account email: "+account.getEmail());
        System.out.println("funding password: "+account.getPassword());
        accountService.login(account);
        return  account;
    }

//    @PostMapping("/sign-up")
//    public SignCheck signUpSubmit (@Valid @RequestBody SignUpForm signUpForm, Model model, Errors errors){
//        if(errors.hasErrors()){
//            model.addAttribute("error", "회원가입을 할 수 없습니다.");
//            return  null;
//        }
//        SignCheck signCheck=new SignCheck();
//        Account account = accountService.processNewAccount(signUpForm);
//        System.out.println("account id: "+account.getId());
//        System.out.println("account email: "+account.getEmail());
//        System.out.println("funding password: "+account.getPassword());
//        accountService.login(account);
//        signCheck.setWallet(account.getEmail());
//        signCheck.setWallet(account.getKey());
//        signCheck.setStatus("true");
//        return  signCheck;
//    }
//


}
