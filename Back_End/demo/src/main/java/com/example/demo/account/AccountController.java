package com.example.demo.account;
import com.example.demo.domain.Account;
import com.example.demo.settings.form.SignInForm;
import com.example.demo.settings.form.SignUpForm;
import com.example.demo.settings.validator.SignInFormValidator;
import com.example.demo.settings.validator.SignUpFormValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class AccountController {


    private final SignUpFormValidator signUpFormValidator;
    private final AccountService accountService;
    private final AccountRepository accountRepository;
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
        response.setHeader("Location", "localhost:8080/sign-up");
        response.setStatus(302);

    }

    @PostMapping("/sign-up")
    public String signUpSubmit (@Valid @RequestBody SignUpForm signUpForm,Model model, Errors errors){
        if(errors.hasErrors()){
            model.addAttribute("error", "회원가입을 할 수 없습니다.");
            return  "false";
        }
        Account account = accountService.processNewAccount(signUpForm);
        System.out.println("account id: "+account.getId());
        System.out.println("account email: "+account.getEmail());
        System.out.println("funding password: "+account.getPassword());
        accountService.login(account);
        return  "true";
    }

    @GetMapping("/login")
    public void loginForm(HttpServletResponse response,Model model) {
        model.addAttribute( new SignInForm());
        response.setHeader("Location", "localhost:8080/login");
        response.setStatus(302);
    }

    @PostMapping("/login")
    public Boolean loginFormSubmit(@Valid @RequestBody SignInForm signInForm,Model model){
        Account account = accountRepository.findByEmail(signInForm.getEmail());
        if (account == null ) {
            model.addAttribute("error", "로그인 할 수 없습니다.");
            return false;
        }
        accountService.login(account);
        return true;
    }

}
