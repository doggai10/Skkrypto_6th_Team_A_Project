package com.example.demo.Controller;


import com.example.demo.account.SignCheck;
import com.example.demo.domain.Account;
import com.example.demo.funding.FundingMapping;
import com.example.demo.funding.FundingRepository;
import com.example.demo.settings.form.SignInForm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class DiscountController {

    private final FundingRepository fundingRepository;

    @Autowired
    public List<FundingMapping> findFunding(){
        List<FundingMapping> fundingList = fundingRepository.findAllBy();
        return fundingList;
    }


    @GetMapping("/funding")
    public void fundingPage(){

    }

    @GetMapping("/funding/{index}")
    public FundingMapping fundingApply(@PathVariable("index") int index){
        List<FundingMapping> fundingList=findFunding();
        if(fundingList.size()<index){
            return null;
        }else{
            return fundingList.get(index);
        }
    }

}
