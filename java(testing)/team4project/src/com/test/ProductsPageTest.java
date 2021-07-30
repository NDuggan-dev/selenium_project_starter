package com.test;

	import static org.junit.Assert.assertTrue;

	import org.junit.After;
	import org.junit.Before;
	import org.junit.Test;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.openqa.selenium.support.PageFactory;

	import pages.ProductsPage;

	public class ProductsPageTest {

		private WebDriver driver;

		@Before
		public void setup() {

			this.driver = new ChromeDriver();
			driver.manage().window().maximize();

		}

		@Test
		public void header() {
		
		ProductsPage productpage = PageFactory.initElements(driver, ProductsPage.class);
		this.driver.get(productpage.URL);
		System.out.println(productpage.returnHeader());
		assertTrue(productpage.returnHeader().contains("products"));
	}

		
		
		@After
		public void afterTest() {
			driver.close();
		
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

