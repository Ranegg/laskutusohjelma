package fi.metropolia.LaskutusApplication.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotBlank
    private String name;
    @NotBlank
    private String password;
    @NotBlank
    private String lastName;
    
    private String yTunnus;
    private String address;
    private String city;
    
    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    private String email;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
    	this.name = name;
    }
    public void setLastName(String lastName) {
    	this.lastName = lastName;
    }
    public String getLastName() {
    	return lastName;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }

    public String getPassword() {
        return password;
    }
    public void setEmail(String email) {
    	this.email = email;
    }
    public String getEmail() {
    	return email;
    }
    public String getYtunnus() {
    	return yTunnus;
    }
    public void setYtunnus(String yTunnus) {
    	this.yTunnus = yTunnus;
    }
    public String getAddress() {
    	return address;
    }
    public void setAddress(String address) {
    	this.address = address;
    }
    public String getCity() {
    	return city;
    }
    public void setCity(String city) {
    	this.city = city;
    }


}