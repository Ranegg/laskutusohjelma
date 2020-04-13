package fi.metropolia.LaskutusApplication.model;


 import com.fasterxml.jackson.annotation.JsonIgnore;

 import javax.persistence.*;

@Entity
@Table(name = "CUSTOMERS")
public class DAOCompany {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id", insertable=false, updatable=false)
	@JsonIgnore
	private DAOUser user;

	@Column
	private String company;

	@Id
	@Column
	private String vatID;

	@Column
	private String name;

	@Column
	private String address;

	@Column
	private String city;

	@Column
	private String email;

	public DAOCompany() {
	}

	public DAOCompany(String company, String vatID, String name, String address, String city,
			String email) {
		this.company = company;
		this.vatID = vatID;
		this.name = name;
		this.address = address;
		this.city = city;
		this.email = email;
	}



	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}



	public String getVatID() {
		return vatID;
	}

	public void setVatID(String vatID) {
		this.vatID = vatID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public DAOUser getUser() {
		return user;
	}

	public void setUser(DAOUser user) {
		this.user = user;
	}
} 
