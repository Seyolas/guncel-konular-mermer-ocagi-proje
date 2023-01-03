import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class Mercik {
	public static WebDriver driver;

	@BeforeAll
	static void basla(){
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://guncel.vercel.app/");
	}
	@BeforeEach
	void once(){
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
	}
	@AfterAll
	static void bitir() throws InterruptedException {
		Thread.sleep(2000);
		driver.close();
		driver.quit();
	}

	@Test @Order(1) void login() {
		driver.findElement(By.xpath("//a[contains(text(),'Giriş Yap')]")).click();
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("qamusysi@lyft.live");
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Test12345.");
		driver.findElement(By.xpath("//button[normalize-space()='Continue']")).click();
		String text = driver.findElement(By.xpath("//a[contains(text(),'Çıkış Yap')]")).getText();
		Assertions.assertEquals(text, "Çıkış Yap");
	}

	@Test @Order(2) void emptyPic(){
		driver.findElement(By.xpath("//button[normalize-space()='Analiz Et']")).click();
		String text = driver.findElement(By.xpath("//p[@class='jsx-babeca1ede7fda59']")).getText();
		Assertions.assertEquals(text, "Üzgünüz Mermer fotoğrafını işleyemedik...");
	}

	@Test @Order(3) void logout(){
		driver.findElement(By.xpath("//div[@class='jsx-df157beaacda4edc main-btn']")).click();
		String text = driver.findElement(By.xpath("//a[contains(text(),'Giriş Yap')]")).getText();
		Assertions.assertEquals(text, "Giriş Yap");
	}
}
