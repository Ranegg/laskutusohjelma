package fi.metropolia.LaskutusApplication.controller;


import fi.metropolia.LaskutusApplication.dao.CompanyDao;
import fi.metropolia.LaskutusApplication.model.Company;
import fi.metropolia.LaskutusApplication.model.DAOCompany;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import fi.metropolia.LaskutusApplication.dao.UserDao;
import fi.metropolia.LaskutusApplication.model.DAOUser;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class UserListController {

    @Autowired
    UserDao userListRepo;

    @Autowired
    CompanyDao company;

    @GetMapping(path = "/users")
    public List<DAOUser> getAllUsers() {
        List<DAOUser> users = new ArrayList<>();
        userListRepo.findAll().forEach(users::add);
        return users;
    }

    @GetMapping(path = "/user")
    public DAOUser getUser(Authentication authentication) {
        return userListRepo.findByUsername(authentication.getName());
    }

    @GetMapping(path = "/customers")
    public List<DAOCompany> getAllCompanies(Authentication authentication){
        DAOUser user = userListRepo.findByUsername(authentication.getName());
        return new ArrayList<>(company.findAllByUser_Id(user.getId()));
    }

    @PostMapping(path = "/customer")
    public DAOCompany addCustomer(@RequestBody DAOCompany comp, Authentication authentication){
        comp.setUser(userListRepo.findByUsername(authentication.getName()));
        company.save(comp);
        return comp;
    }

    @GetMapping("/users/{id}")
    public Optional<DAOUser> getById(@PathVariable long id) {
        return userListRepo.findById(id);

    }


    @PostMapping(path = "/users")
    public DAOUser addUser(@RequestBody DAOUser user) {
        userListRepo.save(user);
        return user;
    }


    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable long id) {
        userListRepo.deleteById(id);
    }

    @DeleteMapping(path = "/customers/{companyName}")
    public void deleteCustomer(@PathVariable String companyName) {
        DAOCompany comp = company.findByCompany(companyName);
        company.deleteById(comp.getCustomer_id());
    }
} 