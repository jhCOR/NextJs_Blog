import { useEffect, useState } from 'react';
import * as React from 'react';
import Image from 'next/image'
import {CardMedia, CardContent, CardActions, Grid}from '@mui/material';
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Card,
  Box,
  Stack,
  Table,
  Button,
  Checkbox,
  TableBody,
	Skeleton,
  Container,
  Typography,
  TableContainer,
  TablePagination,
	CircularProgress
} from '@mui/material';

export default function ShowList() {
const router = useRouter();
  return (
	
      <Container >
		
		 <Grid container justifyContent="center" >
            <Link href="/posts/pages">
                <Card>
                <Image
                    alt="Mountains"
                    src="/images/airport.jpg"
                    width="100%"
                    height="100vh"
                    quality={100}
                />
                <br />

                <a>pages</a>

                </Card>
            </Link>
            <Link href="/posts/markdown">
                <Card>
                <Image
                    src="/images/photo.jpg"
                    width="100%"
                    height="100vh"
                    quality={100}
                />
                <br />

                <a>markdown</a>

                </Card>
            </Link>
               <Link href="/posts">
                <Card>
                <Image
                    src="/images/photo2.jpg"
                    width="100%"
                    height="100vh"
                    quality={100}
                />
                <br />

                <a>index</a>

                </Card>
            </Link>
		</Grid>
          
          
           <Grid container justifyContent="center" >
                <Card onClick={() => router.push("tags/Test1")}>
                    <Typography>If you click this,</Typography>
                    <Typography>page will move to 'tags/Test1'</Typography>
                </Card>
            <Link href="/posts/markdown">
                <Card>
                <Image
                    src="/images/photo.jpg"
                    width="100%"
                    height="100vh"
                    quality={100}
                />
                <br />

                <a>markdown</a>

                </Card>
            </Link>
               <Link href="/posts">
                <Card>
                <Image
                    src="/images/photo2.jpg"
                    width="100%"
                    height="100vh"
                    quality={100}
                />
                <br />

                <a>index</a>

                </Card>
            </Link>
		</Grid>
      </Container>
  );
}
