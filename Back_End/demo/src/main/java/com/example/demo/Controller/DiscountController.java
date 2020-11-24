package com.example.demo.Controller;


import com.example.demo.account.SignCheck;
import com.example.demo.domain.Account;
import com.example.demo.settings.form.SignInForm;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class DiscountController {

    @GetMapping("/funding")
    public void fundingPage(){

    }

}
