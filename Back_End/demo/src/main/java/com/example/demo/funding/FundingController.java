package com.example.demo.funding;


import com.example.demo.domain.Funding;
import com.example.demo.settings.form.FundingForm;
import com.example.demo.settings.validator.FundingFormValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
public class FundingController {

    private final FundingService fundingService;
    private final  FundingRepository fundingRepository;
    private  final FundingFormValidator fundingFormValidator;


    //   List<FundingMapping> fundingList = fundingRepository.findAllBy();
    //        return  fundingList;

//    @RequestMapping(value="/apply", method = RequestMethod.GET)
//    public void applyForm(Model model) {
//        model.addAttribute(new FundingForm());
//        System.out.println(model.toString());
//    }


    @InitBinder("fundingForm")
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(fundingFormValidator);
    }


    @GetMapping("/apply")
    public void applyForm(HttpServletResponse response, Model model)  {
       model.addAttribute(new FundingForm());
        response.setHeader("Location", "localhost:8080/apply");
        response.setStatus(302);
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
    }
}

