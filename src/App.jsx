import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Suspense, lazy } from "react";

const LazyCourses = lazy(() => import("./pages/Courses"));
const LazyCourseDetail = lazy(() => import("./pages/CourseDetail"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyContact = lazy(() => import("./pages/Contact"));

function App() {
    return (
        <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<LazyCourses />} />
                    <Route path="/courses/:id" element={<LazyCourseDetail />} />
                    <Route path="/about" element={<LazyAbout />} />
                    <Route path="/contact" element={<LazyContact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App
