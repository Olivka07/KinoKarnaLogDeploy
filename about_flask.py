from multiprocessing import context
import time
import codecs
from flask import Flask, render_template
from selenium import webdriver
import os




app = Flask(__name__)

@app.route('/about')
def index():
    return render_template("index.html")


# @app.route('/about/<string:namefilm>')
# def about_film(namefilm):
#     headers = {
#         "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
#         "Accept-Encoding": "gzip, deflate, br",
#         "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
#         "Cache-Control": "max-age=0",
#         "Connection": "keep-alive",
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36"  
#     }
#     url = "http://localhost:3000/main"
#     r = requests.get(url=url, headers=headers)
#     with open("htmlcode.html", "w") as file:
#         file.write(r.text)
#     return "str(c)"


@app.route('/about/<string:namefilm>')
def about_film(namefilm):
    description = ""
    description = find_desc(namefilm)
    context = { "description" : str(description), "namefilm": namefilm}
    return render_template("about_film.html", context=context)
    # context = {
    #     "namefilm": namefilm,
    #     "description": stroka
    # }
    # return render_template("about_film.html", context=context)


# def find_list():
#     url = "http://localhost:3000/main"
#     options = webdriver.ChromeOptions()
#     options.add_argument("start-maximized")
#     strrefs = []
#     k = 0
#     try:
#         driver = webdriver.Chrome(
#             executable_path="chromedriver.exe",
#             options=options
#         )
#         driver.get(url=url)
#         email = driver.find_element_by_name('email')
#         email.send_keys("test@yandex.ru")
#         pswrd = driver.find_element_by_name('password')
#         pswrd.send_keys("123456")
#         next = driver.find_element_by_name('buttonin')
#         next.click()
#         time.sleep(5)
#         listrefs = driver.find_elements_by_class_name("Navbar_myclass1__a1Ytk")
#         for ref in listrefs:
#             strrefs.append(ref.get_attribute("href"))
#         with open("htmlcode_selenium.html", "w") as file:
#             file.write(driver.page_source)
#     except Exception as ex:
#         print(ex)
#     finally:
#         driver.close()
#         driver.quit()
#     return strrefs


def find_desc(namefilm):
    url = "http://localhost:3000/main"
    options = webdriver.ChromeOptions()
    options.add_argument("start-maximized")
    strrefs = []
    k = 1
    razd3 = "К сожалению, такого фильма на сайте нет. =("
    try:
        driver = webdriver.Chrome(
            executable_path="chromedriver.exe",
            options=options
        )
        driver.get(url=url)
        email = driver.find_element_by_name('email')
        email.send_keys("test@yandex.ru")
        pswrd = driver.find_element_by_name('password')
        pswrd.send_keys("123456")
        next = driver.find_element_by_name('buttonin')
        next.click()
        time.sleep(3)
        text = ""
        razd1 = ""
        razd2 = ""
        razd3 = "К сожалению, такого фильма на сайте нет. =("
        while (k<=14):
            listrefs = driver.find_element_by_id(str(k))
            listrefs.click()
            time.sleep(1)
            k = k + 1
            with codecs.open("htmlcode_all.txt",mode="w" ,encoding='utf-8') as file:
                file.write(driver.page_source)
            with codecs.open("htmlcode_all.txt",mode="r" ,encoding='utf-8') as file:
                text = file.read()
            if (text.find(namefilm)!=-1):
                razd1 = text.partition(namefilm)[2]
                razd2 = razd1.partition("</a>")[2]
                razd3 = razd2.partition("</p>")[0]
                k = 15
    except Exception as ex:
        print(ex)
    finally:
        driver.close()
        driver.quit()
        path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'htmlcode_all.txt')
        os.remove(path)
    return razd3


# async def as_fun_author(driver):
#     email = driver.find_element_by_name('email')
#     email.send_keys("test@yandex.ru")
#     pswrd = driver.find_element_by_name('password')
#     pswrd.send_keys("123456")
#     next = driver.find_element_by_name('buttonin')
#     next.click()
#     await asyncio.sleep(100)


# async def as_fun(driver):
#     time.sleep(2)
#     list_a = driver.find_element_by_class_name('Navbar_myclass1__a1Ytk')
#     for l_a in list_a:
#         l_a.click()
#         await asyncio.sleep(6)


app.run(debug=True)

