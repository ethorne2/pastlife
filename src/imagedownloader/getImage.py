# gets the reincarnation image for displaying on results page

def image(keyword):
    with open("keyword.txt", "w") as f:
        f.write(keyword)


keyword = "reincarnation"
image(keyword)