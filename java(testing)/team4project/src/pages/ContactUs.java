package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ContactUs {

	public final String URL = "http://127.0.0.1:5501/html/contactus.html";
	
	
	@FindBy(xpath = "/html/body/div/div[1]/h1")
	private WebElement Header;
	
	
	
	public String returnHeader() {

		return this.Header.getText().toLowerCase();
	}



	
	
	
	
	
	
	
}
