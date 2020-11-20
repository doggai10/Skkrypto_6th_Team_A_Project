package com.example.demo.funding;

import com.example.demo.domain.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface FundingRepository extends JpaRepository<Funding,Long> {
    List<FundingMapping> findAllBy();
}
