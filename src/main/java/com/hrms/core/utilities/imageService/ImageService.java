package com.hrms.core.utilities.imageService;

import com.hrms.core.utilities.results.DataResult;
import org.springframework.web.multipart.MultipartFile;


public interface ImageService {
    DataResult<?> save(MultipartFile file);
}
