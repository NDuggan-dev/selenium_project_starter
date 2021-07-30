package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProductsPage {

	public final String URL = "http://127.0.0.1:5501/html/product.html";
	
	
	@FindBy(xpath = "")
	private WebElement Header;
	
	
	
	public String returnHeader() {

		return this.Header.getText().toLowerCase();
	}

	
	
	
	
	
	
}
