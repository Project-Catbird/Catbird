# Pulls down an image as a starting point that is a snapshot of running container
# with node version 16
from node:16
# Create file structure in docker container
RUN mkdir /application
# Set the working directory in docker container for later commands
WORKDIR /application
# Move files over to the container from ./applicattion
COPY . /application
# run npm install in the container starting in WORKDIR
RUN npm install
# create bundle through running the bellow comamnd in WORKDIR
RUN npm run react:prod
# Expose port in container
EXPOSE 3127
# set up command
CMD ["npm", "start"]