package com.example.demo.Controller;


import com.example.demo.account.SignCheck;
import com.example.demo.domain.Account;
import com.example.demo.domain.Funding;
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
    public List<Funding> findFunding(){
        List<Funding> fundingList = fundingRepository.findAllBy();
        System.out.println(fundingList.toString());
        return fundingList;
    }


    @GetMapping("/funding")
    public void fundingPage(){

    }

    @GetMapping("/funding/{index}")
    public Funding fundingApply(@PathVariable("index") String index){
        List<Funding> fundingList=findFunding();
        int num = Integer.parseInt(index)-1;
        if(fundingList.size()<num){
            return null;
        }
        Funding funding=fundingList.get(num);
        return funding;
    }
//    @GetMapping("/funding/1")
//    public void fundingApply(){
//        List<Funding> fundingList=findFunding();
//        int num =0;
////        if(fundingList.size()<num){
////           System.out.println("null");
////        }
//        Funding funding=fundingList.get(0);
//        System.out.println(funding.getMoney());
//
//    }
}
