using albums_api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace albums_api.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        // GET: albums
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();
            return Ok(albums);
        }

        // GET: albums/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var album = Album.GetAll().FirstOrDefault(a => a.Id == id);
            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // GET: albums/sort/{by}
        [HttpGet("sort/{by}")]
        public IActionResult Sort(string by)
        {
            var albums = Album.GetAll();

            IEnumerable<Album> sortedAlbums = by.ToLower() switch
            {
                "title" => albums.OrderBy(a => a.Title),
                "artist" => albums.OrderBy(a => a.Artist),
                "price" => albums.OrderBy(a => a.Price),
                _ => albums
            };

            return Ok(sortedAlbums);
        }
    }
}