package steps;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.aventstack.extentreports.utils.FileUtil;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class seleniumSteps {

	public static WebDriver driver;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\KalpagamSuresh\\eclipse-workspace\\Project\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
	}

	@After
	public void tearDown(Scenario scenario) throws IOException {
		// Screen shot on failure
		if (scenario.isFailed()) {
			//To embed screenshot in extent report with cucumber
			String scenarioName = scenario.getName();
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			/*
			 *Embeds data into the report(s). Some reporters (such as the progress one) don't embed data, but others do (html and json). 
			 *Refer the website and go to EMBED method section --> //https://www.javadoc.io/doc/info.cukes/cucumber-core/1.2.5/cucumber/api/Scenario.html#embed-byte:A-java.lang.String-
			*/
			scenario.embed(screenshotBytes, "image/png");
			scenario.write(scenarioName);
			
			//To put screenshot in a folder with scenario name and date format
			Date d = new Date();
			String date = d.toString().replace(":", "_").replace("", "_");
			File fileTemp = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
			File filePerm = new File("C:\\Users\\KalpagamSuresh\\eclipse-workspace\\Project\\FailedScreenshot"+scenarioName+"_"+date+".png");
			FileUtils.copyFile(fileTemp, filePerm);
			
			
			
		}

		if (driver != null) {
			driver.quit();
		}

	}

	@Given("navigate to {string}")
	public void navigate_to(String url) {

		driver.get(url);

	}

	
	
	@When("Signup link is available")
	public void signup_link_is_available() throws InterruptedException {
		Thread.sleep(1000L);
		driver.findElement(By.xpath("//*[@id=\"login-block\"]/div/ul/li[1]/a")).isDisplayed();
				
	}

	@And("we click on signup link")
	public void we_click_on_Signup_link() throws InterruptedException {
		Thread.sleep(1000L);
		driver.findElement(By.xpath("//*[@id=\"login-block\"]/div/ul/li[1]/a")).click();
	}
	
	@When("Registration page appears")
	public void registration_page_appears() throws InterruptedException  {
		Thread.sleep(1000L);
		driver.findElement(By.xpath("//*[@id='cm-content']/div/div[2]/div/h2")).isDisplayed();
	    }

	@Then("we pass \"([^\"]*)\" in first name field")
	public void we_pass_in_first_name_field(String firstname) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.name("firstname")).sendKeys(firstname);
	    Thread.sleep(1000L);
	}
	
	
	@Then("pass \"([^\"]*)\" in last name field")
	public void pass_in_last_name_field(String Lastname) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.name("lastname")).sendKeys(Lastname);
		    Thread.sleep(1000L); 
	}

	@Then("enter \"([^\"]*)\" in email field")
	public void enter_in_email_field(String email) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.name("email")).sendKeys(email);
		    Thread.sleep(1000L);
		    }

	@Then("pass valid \"([^\"]*)\" in username field")
	public void pass_valid_in_username_field(String username) throws InterruptedException {
		 driver.findElement(By.name("username")).sendKeys(username);
		    Thread.sleep(1000L);
	}

	@Then("we give a valid {string} in password field")
	public void we_give_a_valid_in_password_field(String password) throws InterruptedException  {
		driver.findElement(By.name("pass1")).sendKeys(password);
	    Thread.sleep(1000L);
	}

	@Then("we confirm the {string} in confirm password field")
	public void we_confirm_the_in_confirm_password_field(String confirmpassword) throws InterruptedException  {
		driver.findElement(By.name("pass2")).sendKeys(confirmpassword);
	    Thread.sleep(1000L);
	}

	@Then("click register")
	public void click_register() throws InterruptedException {
		driver.findElement(By.id("registration_submit")).click();
	    Thread.sleep(1000L);
}

	@When("we are in confirmation page")
	public void we_are_in_confirmation_page()throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"main\"]")).isDisplayed();
	    Thread.sleep(1000L);
}
	
	@When("we click on Profile button")
	public void we_click_on_Profile_button() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[2]/li[2]/a")).click();
	    Thread.sleep(1000L);
}

	

	@Then("validate if profile name is {string}")
	public void we_validate_the(String Name) throws InterruptedException {
		System.out.println(Name);
		Thread.sleep(5000L);
		String actualKeyword = driver
				.findElement(By.xpath("//*[@id=\"navbar\"]/ul[2]/li[2]/ul/li[1]/div/a/p"))
				.getText();
		Assert.assertEquals(Name, actualKeyword);

	} 

	
	@Then("click on Homepage")
	public void click_on_Homepage() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul[1]/li[1]/a")).click();
	    Thread.sleep(1000L);
}

	@Then("once Profile menu appears")
	public void once_Profile_menu_appears() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"cm-content\"]/div/div[2]/div[2]")).isDisplayed();
	    Thread.sleep(1000L);
}


	
	@Then("click on Compose")
	public void click_on_Compose() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"profileCollapse\"]/div/ul/li[2]/a")).click();
		Thread.sleep(1000L);
}


	@Given("we are on compose message page")
	public void we_are_on_compose_message_page() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"cm-content\"]/div/ul")).isDisplayed();
	    Thread.sleep(1000L);
}

	
	@Then("enter the {string} in send to field")
	public void enter_the_receiver_name_in_send_to_field(String ReceiverName) throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"compose_message\"]/fieldset/div[1]/div[1]/span/span[1]/span/ul/li/input")).sendKeys(ReceiverName);
		driver.findElement(By.xpath("//*[@id=\"select2-compose_message_users-results\"]/li[1]")).click();
	    Thread.sleep(5000L);

	}

	@And("type a {string} in subject field")
	public void type_a_subject_in_subject_field(String subject) throws InterruptedException {
		driver.findElement(By.name("title")).sendKeys(subject);
	    Thread.sleep(1000L);
	}
	
	@Then("type the {string} in message field")
	public void type_the_in_message_field(String mailmessage) throws InterruptedException {
		driver.findElement(By.xpath("/html/body")).sendKeys(mailmessage);
	    Thread.sleep(1000L);
	}

	@Then("click send message button")
	public void click_send_message_button() throws InterruptedException {
		driver.findElement(By.id("compose_message_compose")).click();
	    Thread.sleep(5000L);

	}

	@Then("check if confirmation message is displayed")
	public void check_if_confirmation_message_is_displayed() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"cm-content\"]/div/div[2]/div/div[1]")).isDisplayed();
	    Thread.sleep(5000L);

	}
}
