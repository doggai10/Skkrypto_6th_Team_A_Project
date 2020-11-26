package com.example.demo.funding;


import com.example.demo.domain.Funding;
import com.example.demo.settings.form.FundingForm;
import com.example.demo.settings.validator.FundingFormValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
public class FundingController {

    private final FundingService fundingService;
    private final  FundingRepository fundingRepository;
    private  final FundingFormValidator fundingFormValidator;


    @Autowired
    public List<FundingMapping> findFunding(){
        List<FundingMapping> fundingList = fundingRepository.findAllBy();
        return fundingList;
    }

    @InitBinder("fundingForm")
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(fundingFormValidator);
    }


    @GetMapping("/apply")
    public void applyForm( Model model)  {
       model.addAttribute(new FundingForm());
    }



    @PostMapping("/apply")
    public void applySubmit(@Valid @RequestBody FundingForm fundingForm,Model model, Errors errors) {
        if(errors.hasErrors()) {
            System.out.println(errors.toString());
        }
        Funding funding = fundingService.processNewFunding(fundingForm);
        System.out.println("funding id: "+funding.getId());
        System.out.println("funding wallet: "+funding.getWallet());
        System.out.println("funding name: "+funding.getName());
        System.out.println("funding content: "+funding.getContent());
        System.out.println("funding sale: "+funding.getSale());
        System.out.println("funding quantity: "+funding.getQuantity());
        System.out.println("funding price: "+funding.getMoney());
        System.out.println("funding date: "+funding.getDate());
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

