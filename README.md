# DL Astronomy

DL Astronomy is a deep learning project for galaxy classification.  
It predicts two types of galaxies from images:
- Elliptical
- Spiral (including barred spirals)

## Datasets

- **Galaxy Zoo 2: Images** from kaggle : https://www.kaggle.com/datasets/jaimetrickz/galaxy-zoo-2-images
- **Normal-depth sample with new debiasing method** from kaggle : https://gz2hart.s3.amazonaws.com/gz2_hart16.csv.gz

## Installation

### Requirements

Before starting, make sure you have the following installed:
- Docker (to build and run the container)
- Make (for running predefined commands from the Makefile)

### Steps

1. Clone the repository:

```bash
git clone git@github.com:sunblade02/dl-astronomy.git
cd dl-astronomy
```

2. Build the docker image :

```bash
make build
```

3. Run the docker container:

```bash
make start
```

4. Open your browser and go to `http://localhost:8000` to access the FastAPI interface.

## License

This project is licensed under the GNU General Public License (GPL). You are free to use, modify, and distribute it under the terms of the GPL.

See the [LICENSE](./LICENSE)LICENSE file for more details.