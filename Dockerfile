FROM tleyden5iwx/ubuntu-cuda

RUN apt-get install git --yes
RUN apt-get install sudo --yes
RUN git clone https://github.com/torch/distro.git ~/torch --recursive
RUN cd ~/torch && bash install-deps

# Replace user input action with YES
RUN sed -i '184s/.*/input='y'/' install.sh 
RUN ./install.sh
