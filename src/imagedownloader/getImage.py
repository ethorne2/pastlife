# gets the reincarnation image for displaying on results page

def image(keyword):
    with open("keyword.txt", "w") as f:
        f.write(keyword)

    completed_text = 'not completed'
    while completed_text == 'not completed':
        f = open("completed.txt" , "r")
        completed_text = f.read()
        f.close()

keyword = "reincarnation"
image(keyword)
