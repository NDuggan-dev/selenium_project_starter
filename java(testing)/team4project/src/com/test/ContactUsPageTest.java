package com.test;

import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import pages.ContactUs;

public class ContactUsPageTest {

	private WebDriver driver;

	@Before
	public void setup() {

		this.driver = new ChromeDriver();
		driver.manage().window().maximize();

	}

	@Test
	public void header() {
	
	ContactUs contactpage = PageFactory.initElements(driver, ContactUs.class);
	this.driver.get(contactpage.URL);
	System.out.println(contactpage.returnHeader());
	assertTrue(contactpage.returnHeader().contains("contact us"));
}

	
	
	@After
	public void afterTest() {
		driver.close();
	
	}
	
	
}